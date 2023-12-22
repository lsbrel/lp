import axios from "axios";
import { useAppStore } from "@/stores";

export default class Request {
  connection = false;
  response = {
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
  async index(route) {
    let response = {
      status: false,
      data: {},
    };
    await this.connection
      .get(route)
      .then((res) => {
        response.status = true;
        response.data = res.data;
      })
      .catch((err) => {
        response.status = false;
        response.data = err;
      });
    return response;
  }

  async store(route, data) {
    this.connection
      .post(route, data)
      .then((res) => {
        this.setResponse(res.status, res.data);
      })
      .catch((err) => {
        this.setResponse(false, err);
      });

    return this.getResponse();
  }

  async update(route, data) {
    this.connection
      .put(route, data)
      .then((res) => {
        this.setResponse(res.status, res.data);
      })
      .catch((err) => {
        this.setResponse(false, err);
      });

    return this.getResponse();
  }
  /** API INTERACTIONS METHODS */

  /** AUX METHODS */
  resolveHost() {
    if (this.#isLocalhost()) {
      return "http://127.0.0.1:8000";
    } else {
      return "https://ktx.mundiflos.com.br";
    }
  }

  setResponse(status, data) {
    this.response.status = status;
    this.response.data = data;
  }

  async getResponse() {
    return this.response;
  }
  /** AUX METHODS */

  /** PRIVATE METHODS */
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
