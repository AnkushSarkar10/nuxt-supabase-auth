export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          email: string | null
          name: string | null
          uid: string
          updated_at: string | null
        }
        Insert: {
          email?: string | null
          name?: string | null
          uid: string
          updated_at?: string | null
        }
        Update: {
          email?: string | null
          name?: string | null
          uid?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_uid_fkey"
            columns: ["uid"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
