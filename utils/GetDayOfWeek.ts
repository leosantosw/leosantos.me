export function GetGreeting() {
  const dayOfWeek = new Date().toLocaleString('pt-BR', { weekday: 'long' })

  let greeting

  switch (dayOfWeek) {
    case 'segunda-feira':
      greeting = 'Ótima segunda-feira!'
      break
    case 'terça-feira':
      greeting = 'Ótima terça-feira!'
      break
    case 'quarta-feira':
      greeting = 'Ótima quarta-feira!'
      break
    case 'quinta-feira':
      greeting = 'Ótima quinta-feira!'
      break
    case 'sexta-feira':
      greeting = 'Ótima sexta-feira!'
      break
    case 'sábado':
      greeting = 'Ótimo sábado!'
      break
    case 'domingo':
      greeting = 'Ótimo domingo!'
      break
    default:
      // Caso retorne algo fora do padrão
      greeting = 'Ótimo dia!'
  }

  return greeting
}
