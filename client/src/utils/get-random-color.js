export const getRandomColor = effect => {
  // Генерируем случайные значения RGB компонент цвета
  const red = Math.floor(Math.random() * 256)
  const green = Math.floor(Math.random() * 256)
  const blue = Math.floor(Math.random() * 256)

  // Применяем более яркие эффекты к RGB компонентам
  const neonRed = (red + effect) % 256
  const neonGreen = (green + effect) % 256
  const neonBlue = (blue + effect) % 256

  // Преобразуем значения в шестнадцатеричную систему счисления
  const hexRed = neonRed.toString(16).padStart(2, '0')
  const hexGreen = neonGreen.toString(16).padStart(2, '0')
  const hexBlue = neonBlue.toString(16).padStart(2, '0')

  // Формируем строку CSS цвета
  const color = '#' + hexRed + hexGreen + hexBlue
  return color
}
