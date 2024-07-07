import OpenAI from 'openai';
import { OPENAI_KEY } from './constant';

const openai = new OpenAI({
  apiKey: "", 
  dangerouslyAllowBrowser: true ,
});

export default openai