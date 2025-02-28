export const getAdvice = async () => {
    const response = await fetch('https://api.adviceslip.com/advice?t=' + Date.now())
    if (!response.ok) throw new Error('API request failed')
    return response.json()
  }