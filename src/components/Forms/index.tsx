import React, { useState, useEffect } from "react";
import "./style.css";
export function Forms() {
  interface IForms {
    firstName: string;
    lastName: string;
    email: string;
    cpf: number;
    bornDate: Date;
    phoneNumber: number;
    city: string;
    cep: number;
    street: string;
    number: number;
    comp: string;
  }
  interface IDate {
    date: string;
  }
  const novaData: Date = new Date();
  const [newDate, setNewDate] = useState<IDate>({ date: novaData.toString() });
  const [formData, setFormData] = useState<IForms>({
    firstName: "",
    lastName: "",
    email: "",
    cpf: 0,
    bornDate: new Date(),
    phoneNumber: 0,
    city: "",
    cep: 0,
    street: "",
    number: 0,
    comp: "",
  });
  useEffect(() => {
    console.log(formData);
  }, [formData]);

  return (
    <form action="" method="POST">
      <fieldset>
        <legend>Nome completo</legend>
        <label>
          Primeiro nome:
          <input
            name="firstName"
            type="text"
            title="Somente letras"
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                firstName: e.target?.value || "",
              }));
            }}
          />
          <title>Insira o primeiro nome</title>
        </label>

        <label>
          Sobrenome:
          <input
            name="lastName"
            type="text"
            title="Somente letras"
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                lastName: e.target?.value || "",
              }));
            }}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Informações Pessoais</legend>
        <label>
          Email:
          <input
            name="email"
            type="email"
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                email: e.target?.value || "",
              }));
            }}
          />
        </label>
        <label>
          CPF:
          <input
            name="cpf"
            type="number"
            maxLength={11}
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                cpf: Number(e.target?.value || 0),
              }));
            }}
          />
        </label>
        <label>
          Data de Nascimento:
          <input
            name="bornDate"
            type="Date"
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                bornDate: new Date(e.target?.value || ""),
              }));
            }}
          />
        </label>
        <label>
          Telefone:
          <input
            name="phoneNumber"
            type="number"
            maxLength={Number(11)}
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                phoneNumber: Number(e.target?.value),
              }));
            }}
          />
        </label>
      </fieldset>

      <fieldset>
        <legend>Endereço</legend>
        <label>
          Cidade:
          <input
            name="city"
            type="text"
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                city: e.target?.value,
              }));
            }}
          />
        </label>

        <label>
          CEP:
          <input
            name="cep"
            type="number"
            maxLength={7}
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                cep: Number(e.target?.value),
              }));
            }}
          />
        </label>

        <label>
          Rua:
          <input
            name="street"
            type="text"
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                street: e.target?.value,
              }));
            }}
          />
        </label>

        <label>
          Número:
          <input
            name="number"
            type="number"
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                number: Number(e.target?.value),
              }));
            }}
          />
        </label>
        <label>
          Complemento:
          <input
            name="comp"
            type="text"
            required
            onChange={(e) => {
              e.preventDefault();
              setFormData((state) => ({
                ...state,
                comp: e.target?.value,
              }));
            }}
          />
        </label>
      </fieldset>
      <fieldset>
        <legend>Qual é o seu humor atual?</legend>
        <input id="Q1a" name="Q1" type="radio" />
        <label htmlFor="Q1a">a) Feliz</label>
        <input id="Q1b" name="Q1" type="radio" />
        <label htmlFor="Q1b">b) Triste</label>
        <input id="Q1c" name="Q1" type="radio" />
        <label htmlFor="Q1c">c) Zangado</label>
        <input id="Q1d" name="Q1" type="radio" />
        <label htmlFor="Q1d"> d) Outro</label>
        <input type="text" />
      </fieldset>
      <input name="timestamp" type="hidden" value={newDate.date} />

      <button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          console.log("AAAAAAAAAAAAA");
          <>{"aaaaaaaaaa"}</>;
        }}
      >
        Enviar
      </button>
    </form>
  );
}
