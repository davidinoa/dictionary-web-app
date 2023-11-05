import { create } from 'zustand'
import { ApiResponse, ApiResponseSchema } from './schemas'

type SearchState = {
  query: string
  result?: ApiResponse | null
  setQuery: (query: string) => void
  setResult: (result: unknown) => void
}

const useSearchStore = create<SearchState>((set) => ({
  query: '',
  result: undefined,
  setQuery: (query) => set({ query }),
  setResult: (result: unknown) => {
    try {
      const parsedResponse = ApiResponseSchema.parse(result)
      set({ result: parsedResponse })
    } catch (error) {
      set({ result: null })
    }
  },
}))

export default useSearchStore
