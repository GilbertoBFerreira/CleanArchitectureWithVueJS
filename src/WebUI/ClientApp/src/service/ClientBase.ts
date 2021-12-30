import { store } from '@/store';

export class ClientBase {
    /**
     * authorization token value
     */
    public token: string;

    constructor() {
        this.token =store.getters["authentication/token"];
    }

    protected transformOptions(options: any) {
        if (this.token) {
            options.headers["Authorization"] = "bearer " + this.token
        } else {
            console.warn("Authorization token have not been set please authorize first.");
        }
        return Promise.resolve(options);
    }
}