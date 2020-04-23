export const REDIRECT = 'REDIRECT'

interface RedirectRequest {
    type: typeof REDIRECT,
    payload: string
}

export type RouterActionTypes = RedirectRequest;
