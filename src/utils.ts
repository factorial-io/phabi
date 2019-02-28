export function convert(output: string) {
  return output
    .trim()
    .replace('List of found host-configurations:', '')
    .replace('=', '')
    .replace('* ', '*')
};