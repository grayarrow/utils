  // "author": "Chris Hager <chris@linuxuser.at>",
  // "repository": "https://github.com/metachris/typescript-boilerplate",
  // "license": "MIT",

export const delayMillis = (delayMs: number): Promise<void> => new Promise(resolve => setTimeout(resolve, delayMs));

export const greet = (name: string): string => `Hello ${name}`

export const foo = async (): Promise<boolean> => {
  console.log(greet('World'))
  await delayMillis(1000)
  console.log('done')
  return true
}
