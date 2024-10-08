const localStorageKey = 'tasks'

const getTasksFromLocalStorage = () => {
  const storedTasks = localStorage.getItem(localStorageKey)
  return storedTasks ? JSON.parse(storedTasks) : []
}

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem(localStorageKey, JSON.stringify(tasks))
}

export { getTasksFromLocalStorage, saveTasksToLocalStorage }
