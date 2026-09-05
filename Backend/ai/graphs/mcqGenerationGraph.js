// ai/graphs/mcqGenerationGraph.js
import { StateGraph, Annotation, END } from "@langchain/langgraph";
import { retrieveRelevantChunks } from "../../services/retrievalService.js";
import { mcqGeneratorChain } from "../chains/mcqGeneratorChain.js";
import { distractorQualityChain } from "../chains/distractorQualityChain.js";

const State = Annotation.Root({
  sourceId: Annotation(),
  topic: Annotation(),
  numQuestions: Annotation(),
  chunks: Annotation(),
  rawQuestions: Annotation(),
  validQuestions: Annotation(),
});

async function retrieveNode(state) {
  const chunks = await retrieveRelevantChunks(state.topic, state.sourceId, 8);
  return { chunks };
}

async function generateNode(state) {
  const rawQuestions = await mcqGeneratorChain.invoke({
    context: state.chunks.join("\n\n"),
    numQuestions: state.numQuestions,
  });
  return { rawQuestions };
}

async function validateNode(state) {
  const checks = await Promise.all(
    state.rawQuestions.map((q) => distractorQualityChain.invoke({ question: q }))
  );
  const validQuestions = state.rawQuestions.filter((_, i) => checks[i].pass);
  return { validQuestions };
}

function dedupeNode(state) {
  const seen = new Set();
  const validQuestions = state.validQuestions.filter((q) => {
    const key = q.question.trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  return { validQuestions };
}

const graph = new StateGraph(State)
  .addNode("retrieve", retrieveNode)
  .addNode("generate", generateNode)
  .addNode("validate", validateNode)
  .addNode("dedupe", dedupeNode)
  .addEdge("__start__", "retrieve")
  .addEdge("retrieve", "generate")
  .addEdge("generate", "validate")
  .addEdge("validate", "dedupe")
  .addEdge("dedupe", END);

export default graph.compile();