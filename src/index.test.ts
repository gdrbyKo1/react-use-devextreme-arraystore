import { useDxArrayStore } from './'
import { renderHook } from "@testing-library/react-hooks";

// mock timer using jest
jest.useFakeTimers();

describe('useDxArrayStore', () => {
  it('returns an ArrayStore', () => {
    const { result } = renderHook(() => useDxArrayStore([], 'foo'));

    expect(result.current._array).toStrictEqual([]);
    expect(result.current._key).toBe('foo');
  })
})
