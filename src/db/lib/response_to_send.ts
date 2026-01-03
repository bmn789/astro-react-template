const response_to_send = {
    json: (error: any) => {
        const message = error.message || "something went wrong"
        const status = error.status || 500
        return Response.json({ message }, { status })

    },
    throw: (message: string, status?: number) => {
        const error = new Error(message) as any
        error.status = status
        throw error
    }
}

export default response_to_send