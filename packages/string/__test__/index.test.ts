import { describe, expect, it } from 'vitest'
import { toSlash } from '..'

describe('@xparcai-utils/string', () => {
  it('toSlash', () => {
    const filePath: string = '\hello\\vtrbo\\\string/toSlash\\\\'
    expect(toSlash(filePath)).toEqual('hello/vtrbo/string/toSlash//')
  })
})
