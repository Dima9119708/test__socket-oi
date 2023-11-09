import io from 'socket.io-client';

export class Socket {
    #io = io('http://localhost:3000')

    emit(event, data) {
        this.#io.emit(event, data)
    }

    on(event, fn) {
       this.#io.on(event, fn)
    }
}

export const socket = new Socket()
