export type ToastVariant = 'success' | 'danger' | 'warning' | 'info'

export interface ToastItem {
    id: number
    message: string
    title?: string
    variant: ToastVariant
    duration: number
}

export type ToastOptions = Partial<Omit<ToastItem, 'id' | 'message'>>

let counter = 0

export const useToast = () => {
    const toasts = useState<ToastItem[]>('toasts', () => [])

    const remove = (id: number) => {
        toasts.value = toasts.value.filter(t => t.id !== id)
    }

    const add = (message: string, options: ToastOptions = {}) => {
        const id = ++counter
        toasts.value.push({ variant: 'info', duration: 4000, ...options, id, message })
        if (import.meta.client) {
            const duration = options.duration ?? 4000
            if (duration > 0) setTimeout(() => remove(id), duration)
        }
        return id
    }

    const make = (variant: ToastVariant) => (message: string, options: Omit<ToastOptions, 'variant'> = {}) =>
        add(message, { ...options, variant })

    return {
        toasts,
        add,
        remove,
        success: make('success'),
        error: make('danger'),
        warning: make('warning'),
        info: make('info'),
    }
}
