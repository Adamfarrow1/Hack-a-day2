import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
    organization: "org-sGXWqQpPXgvDP3Eob7N75pj7",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);
const response = await openai.listEngines();