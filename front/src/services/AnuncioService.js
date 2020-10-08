import axios from "axios";

class AnuncioService {
  constructor() {
    this.axios = axios.create({
      baseURL: "https://localhost:5001/api",
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  getAnuncios() {
    return this.axios.get("AnuncioWebMotors");
  }

  createAnuncio(Anuncio) {
    return this.axios.post("AnuncioWebMotors", JSON.stringify(Anuncio));
  }

  getAnuncioById(AnuncioId) {
    return this.axios.get("AnuncioWebMotors/" + AnuncioId);
  }

  updateAnuncio(Anuncio) {
    return this.axios.put(
      "AnuncioWebMotors",
      JSON.stringify(Anuncio )
    );
  }

  deleteAnuncio(AnuncioId) {
    return this.axios.delete("AnuncioWebMotors/" + AnuncioId);
  }
}

export default new AnuncioService();
