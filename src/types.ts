export type Chore = { label: string; icon: string; colour: string }
export type Roommate = { id: string; name: string; initials: string; colour: string; whatsapp?: string | null }
export type Schedule = number[][]
export type Assignment = { id: string; roommate_id: string; day: string; chore: string; completed: boolean; week_start?: string | null }
