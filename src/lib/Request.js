import axios from "axios";
import { useAppStore } from "@/stores";

export default class Request {
  connection = false;
  #response = {
    status: false,
    data: {},
  };

  constructor() {
    this.connection = axios.create({
      timeout: 5000,
      baseURL: this.resolveHost(),
      //   headers: {
      //     Authorization: `${useAppStore().getToken()}`,
      //   },
    });
  }

  /** API INTERACTIONS METHODS */
  index(route) {
    this.connection
      .get(route)
      .then((res) => {
        this.#setResponse(res.status, res.data);
      })
      .catch((err) => {
        this.#setResponse(false, err);
      });

    return this.#getResponse();
  }

  store(route, data) {
    this.connection
      .post(route, data)
      .then((res) => {
        this.#setResponse(res.status, res.data);
      })
      .catch((err) => {
        this.#setResponse(false, err);
      });

    return this.#getResponse();
  }

  update(route, data) {
    this.connection
      .put(route, data)
      .then((res) => {
        this.#setResponse(res.status, res.data);
      })
      .catch((err) => {
        this.#setResponse(false, err);
      });

    return this.#getResponse();
  }
  /** API INTERACTIONS METHODS */

  /** AUX METHODS */
  resolveHost() {
    if (this.#isLocalhost()) {
      return "http://localhost:8000";
    } else {
      return "https://ktx.mundiflos.com.br";
    }
  }
  /** AUX METHODS */

  /** PRIVATE METHODS */
  #setResponse(status, data) {
    this.#response.status = status;
    this.#response.data = data;
  }

  #getResponse() {
    return this.#response;
  }

  #isLocalhost() {
    const url = window.location.href;

    const locals = [
      "localhost",
      "docker.dev",
      "local.dev",
      "dev.br",
      "127.0.0.1",
    ];

    return locals.some((local) => url.includes(local));
  }
  /** PRIVATE METHODS */
}
