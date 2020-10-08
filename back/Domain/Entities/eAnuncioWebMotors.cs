using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace webMotors.Domain.Entities
{
    [Table("tb_AnuncioWebmotors")]
    public class eAnuncioWebMotors : Entity
    {

        public string Marca { get; set; }

        public string Modelo { get; set; }

        public string Versao { get; set; }

        public int Ano { get; set; }

        public int Quilometragem { get; set; }

        public string Observacao { get; set; }

        public void Update(eAnuncioWebMotors newAnuncio)
        {
            Marca = newAnuncio.Marca;
            Modelo = newAnuncio.Modelo;
            Versao = newAnuncio.Versao;
            Ano = newAnuncio.Ano;
            Quilometragem = newAnuncio.Quilometragem;
            Observacao = newAnuncio.Observacao;
        }

    }

}