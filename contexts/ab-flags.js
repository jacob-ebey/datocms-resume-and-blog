import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'

const AbFlagsContext = createContext({})

export function useAbFlag(flag) {
  const { abFlags, registerAbFlag } = useContext(AbFlagsContext)
  registerAbFlag(flag)

  return Boolean(abFlags[flag])
}

export function AbFlagsProvider({ children, fetchFlags }) {
  const [abFlags, setAbFlags] = useState({})
  const { current: flags } = useRef(new Set())

  const registerAbFlag = useCallback(flag => {
    flags.add(flag)
  }, [flags])

  useEffect(() => {
    let canceled = false

    const uniqueFlags = [...flags]

    if (!uniqueFlags.length) {
      return
    }

    fetchFlags(uniqueFlags)
      .then(flagValues => {
        if (!canceled) {
          setAbFlags(flagValues || {})
        }
      })
      .catch(error => {
        console.error('Failed to fetch AB Flags:', error)
      })

    return () => {
      canceled = true
    }
  }, [flags, fetchFlags, setAbFlags])

  const value = useMemo(() => ({
    abFlags,
    registerAbFlag
  }), [abFlags, registerAbFlag])
  
  return (
    <AbFlagsContext.Provider value={value}>
      {children}
    </AbFlagsContext.Provider>
  )
}
