import type { Chore, Roommate, Schedule } from './types'
export const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
export const chores: Chore[] = [{ label: 'Kitchen & dishes', icon: '✦', colour: 'peach' }, { label: 'Cutting veggies', icon: '⌁', colour: 'lavender' }, { label: 'Cooking', icon: '✧', colour: 'mint' }, { label: 'Take out trash', icon: '♧', colour: 'yellow' }, { label: 'Vacuum & floors', icon: '✺', colour: 'sky' }, { label: 'Grocery run', icon: '✣', colour: 'coral' }]
export const initialRoommates: Roommate[] = [{ id: 'suresh', name: 'Suresh', initials: 'SN', colour: '#fb8062' }, { id: 'sumanth', name: 'Sumanth', initials: 'SS', colour: '#6e80e8' }, { id: 'vijay', name: 'Vijay', initials: 'SV', colour: '#4db99d' }, { id: 'naresh', name: 'Naresh', initials: 'VN', colour: '#e2ae4d' }]
export const initialSchedule: Schedule = [[0, 1, 2, 3, 4, 5], [2, 3, 4, 5, 0, 1], [4, 5, 0, 1, 2, 3], [1, 2, 3, 4, 5, 0]]
