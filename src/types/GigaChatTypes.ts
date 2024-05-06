/* eslint-disable no-unused-vars */
export enum ROLE_TYPES {
    SYSTEM = 'system',
    USER = 'user',
    ASSISTANT = 'assistant',
    SEARCH_RESULT = 'search_result',
}

export interface IGigaChatMessages {
    /**
     * Роль автора сообщения
     */
    role: ROLE_TYPES
    /**
     * Текст сообщения
     */
    content: string
}
export interface IGigaChoices {
    index: number
    finish_reason: 'stop' | 'length' | 'blacklist'
    message: IGigaChatMessages
}
export interface IGigaUsage {
    prompt_tokens: number
    completion_tokens: number
    total_tokens: number
    system_tokens: number
}

export interface IGigaChatRequest {
    /**
     * Возможные значения: [GigaChat, GigaChat-Pro, GigaChat:latest]
     *
     * Название модели, от которой нужно получить ответ.
     *
     * Для выбора последней актуальной модели используйте GigaChat:latest.
     */
    model?: string
    /**
     * Температура выборки. Значение температуры должно быть не меньше ноля.
     * Чем выше значение, тем более случайным будет ответ модели.
     * При значениях температуры больше двух, набор токенов в ответе модели может отличаться избыточной случайностью.
     * Значение по умолчанию зависит от выбранной модели (поле model) и может изменяться с обновлениями модели.
     */
    temperature?: number
    /**
     * Возможные значения: <= 1
     *
     * Параметр используется как альтернатива температуре (поле temperature).
     * Задает вероятностную массу токенов, которые должна учитывать модель.
     * Так, если передать значение 0.1, модель будет учитывать только токены, чья вероятностная масса входит в верхние 10%.
     *
     * Значение по умолчанию зависит от выбранной модели (поле model) и может изменяться с обновлениями модели.
     * Значения изменяются в диапазоне от ноля до единицы включительно.
     *
     * Значение изменяется в диапазоне от 0 до 1.
     */
    top_p?: number
    /**
     * Возможные значения: >= 1 and <= 4
     *
     * По умолчанию: 1
     *
     * Количество вариантов ответов, которые нужно сгенерировать для каждого входного сообщения.
     *
     * Количество вариантов может изменяться от одного до четырех. По умолчанию модель возвращает один вариант ответа.
     */
    n?: number
    /**
     * По умолчанию: false
     *
     * Указывает, что сообщения надо передавать по частям в потоке.
     *
     * Сообщения передаются по протоколу SSE.
     *
     * Поток завершается событием data: [DONE].
     */
    stream?: boolean
    /**
     * По умолчанию: 1024
     *
     * Максимальное количество токенов, которые будут использованы для создания ответов
     */
    max_tokens?: number
    /**
     * Количество повторений слов:
     *
     * Значение 1.0 — нейтральное значение.
     * При значении больше 1 модель будет стараться не повторять слова.
     * Значение по умолчанию зависит от выбранной модели (поле model) и может изменяться с обновлениями модели.
     */
    repetition_penalty?: number
    /**
     * Параметр потокового режима ("stream": "true").
     * Задает минимальный интервал в секундах, который проходит между отправкой токенов.
     * Например, если указать 1, сообщения будут приходить каждую секунду,
     * но размер каждого из них будет больше, так как за секунду накапливается много токенов.
     */
    update_interval?: number
    /**
     * Массив сообщений, которыми пользователь обменивался с моделью.
     */
    messages: IGigaChatMessages[]
}

export interface IGigaResponse {
    choices: IGigaChoices[]
    created: number
    model: ROLE_TYPES
    usage: IGigaUsage
    object: string
}

export interface IGigaAuth {
    access_token: string
    expires_at: number
}
