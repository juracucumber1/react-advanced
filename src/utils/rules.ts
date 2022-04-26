
export const rules = {
    required: (message: string = "Обязательно поле") => ({
        required: true,
        message
    })
}