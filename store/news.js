import axios from 'axios'

const apiUrl = process.env.newsApiUrl
const apiToken = process.env.newsApiToken

const DEFAULT_STATE = {
  sources: [],
  headlines: []
}

export const MUTATION_TYPES = {
  SOURCES_ADD: 'SOURCES_ADD',
  SOURCES_CLEAR: 'SOURCES_CLEAR',
  HEADLINES_ADD: 'HEADLINES_ADD',
  HEADLINES_CLEAR: 'HEADLINES_CLEAR'
}

/**
 * State
 */
export const state = () => DEFAULT_STATE

/**
 * Getters
 */
export const getters = {}

/**
 * Mutations
 */
export const mutations = {
  [MUTATION_TYPES.SOURCES_ADD]: (state, sources) => {
    state.sources.push(...sources)
  },
  [MUTATION_TYPES.SOURCES_CLEAR]: state => {
    state.sources.splice(0, state.sources.length)
  },
  [MUTATION_TYPES.HEADLINES_ADD]: (state, sources) => {
    state.sources.push(...sources)
  },
  [MUTATION_TYPES.HEADLINES_CLEAR]: state => {
    state.sources.splice(0, state.sources.length)
  }
}

/**
 * Actions
 */
export const actions = {
  initializeSources: async ({ commit }) => {
    const { data } = await axios.get(`${apiUrl}/sources?apiKey=${apiToken}`)
    const { sources } = data
    commit(MUTATION_TYPES.SOURCES_ADD, sources)
  }
}
