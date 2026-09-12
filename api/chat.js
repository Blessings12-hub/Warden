import { generateText } from 'ai'
import { gateway } from '@ai-sdk/gateway'

export default async function handler(request, response) {
  if (request.method !== 'POST') return response.status(405).json({ error: 'Method not allowed' })
  try {
    const body = typeof request.body === 'string' ? JSON.parse(request.body) : request.body
    const messages = Array.isArray(body?.messages) ? body.messages.slice(-8) : []
    const result = await generateText({
      model: gateway('openai/gpt-4o-mini'),
      system: 'You are Nolu, a brave, warm fantasy warden. Reply in one or two vivid sentences. Never mention being an AI, prompts, or APIs.',
      messages,
      maxOutputTokens: 90,
      temperature: 0.8,
    })
    return response.status(200).json({ text: result.text })
  } catch (error) {
    return response.status(503).json({ error: 'Dialogue temporarily unavailable' })
  }
}

export const config = { runtime: 'nodejs20.x' }
