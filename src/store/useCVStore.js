import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  personalDetails: {},
  experience: [],
  projects: [],
  academics: {},
  template: 'template1',
  colorTheme: {
    primary: '#1f2937', // Default: Gray-800
    accent: '#3b82f6', // Default: Blue-500
  },
  font: 'sans-serif',
}
export const useCVStore = create(
  persist(
    set => ({
      ...initialState,
      setColorTheme: theme => set({ colorTheme: theme }),
      setFont: font => set({ font }),
      setTemplate: template => set({ template }),
      setPersonalDetails: data => set({ personalDetails: data }),
      setExperience: data => set({ experience: data }),
      setProjects: data => set({ projects: data }),
      setAcademics: data => set({ academics: data }),
      reset: () => {
        set(initialState)
      },
    }),
    {
      name: 'cv-storage',
    }
  )
)
