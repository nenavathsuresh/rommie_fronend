import type { Assignment, Roommate } from './types'

const API_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:8000'

async function request<T>(path: string, token?: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_URL}${path}`, { ...init, headers: { 'Content-Type': 'application/json', ...(token ? { Authorization: `Bearer ${token}` } : {}), ...init?.headers } })
  if (!response.ok) { const body = await response.json().catch(() => ({})); throw new Error(body.detail ?? 'Something went wrong') }
  return response.status === 204 ? undefined as T : response.json() as Promise<T>
}
export const api = {
  login: (email: string, password: string) => request<{ access_token: string }>('/auth/login', undefined, { method: 'POST', body: JSON.stringify({ email, password }) }),
  me: (token: string) => request<CurrentUser>('/auth/me', token),
  roommates: (token: string) => request<Roommate[]>('/roommates', token),
  createRoommate: (token: string, roommate: Pick<Roommate, 'name' | 'colour'>) => request<Roommate>('/roommates', token, { method: 'POST', body: JSON.stringify(roommate) }),
  assignments: (token: string) => request<Assignment[]>('/assignments', token),
  createAssignment: (token: string, assignment: Pick<Assignment, 'roommate_id' | 'day' | 'chore' | 'week_start'>) => request<Assignment>('/assignments', token, { method: 'POST', body: JSON.stringify(assignment) }),
  updateAssignment: (token: string, id: string, values: Partial<Assignment>) => request<Assignment>(`/assignments/${id}`, token, { method: 'PATCH', body: JSON.stringify(values) }),
  history: (token: string) => request<HistoryEntry[]>('/history', token),
  feedback: (token: string, message: string, category: 'feedback' | 'help') => request('/feedback', token, { method: 'POST', body: JSON.stringify({ message, category }) }),
}
export type CurrentUser = { id: string; email: string; name: string }
export type HistoryEntry = { id: string; roommate_id: string; chore: string; completed_at: string }
