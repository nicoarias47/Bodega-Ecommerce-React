import React from "react";

const CheckoutForm = ({
  handleChange,
  handleSubmit,
  handleCancel,
  handleBlur,
  errors,
  order,
}) => {
  return (
    <>
      <h1 className="text-center">Checkout</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <label htmlFor="name" className="d-block">
            Nombre
          </label>
          <input
            name="name"
            id="name"
            type="text"
            placeholder="Bruce"
            required
            className="w-100"
            value={order.name}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}
        </div>
        <div className="mb-2">
          <label htmlFor="lastName" className="d-block">
            Apellido
          </label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            placeholder="Wayne"
            className="w-100"
            required
            value={order.lastName}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.lastName && (
            <span className="form-error">{errors.lastName}</span>
          )}
        </div>
        <div className="mb-2">
          <label htmlFor="tel" className="d-block">
            Tel---ej: 1188884444---
          </label>
          <input
            name="tel"
            id="tel"
            type="number"
            placeholder="1188884444"
            className="w-100"
            required
            value={order.tel}
            onBlur={handleBlur}
            onChange={handleChange}
          />
          {errors.tel && <span className="form-error">{errors.tel}</span>}
        </div>
        <div className="mb-2">
          <label htmlFor="province" className="d-block">
            Provincia
          </label>
          <select
            id="province"
            name="province"
            required
            value={order.province}
            onBlur={handleBlur}
            onChange={handleChange}
          >
            <option value="">...</option>
            <option value="Buenos Aires">Buenos Aires</option>
            <option value="Ciudad Autónoma de Buenos Aires">
              Ciudad Autónoma de Buenos Aires
            </option>
            <option value="Catamarca">Catamarca</option>
            <option value="Chaco">Chaco</option>
            <option value="Chubut">Chubut</option>
            <option value="Córdoba">Córdoba</option>
            <option value="Corrientes">Corrientes</option>
            <option value="Entre Ríos">Entre Ríos</option>
            <option value="Formosa">Formosa</option>
            <option value="Jujuy">Jujuy</option>
            <option value="La Pampa">La Pampa</option>
            <option value="La Rioja">La Rioja</option>
            <option value="Mendoza">Mendoza</option>
            <option value="Misiones">Misiones</option>
            <option value="Neuquen">Neuquen</option>
            <option value="Rio Negro">Rio Negro</option>
            <option value="Salta">Salta</option>
            <option value="San Juan">San Juan</option>
            <option value="San Luis">San Luis</option>
            <option value="Santa Crunz">Santa Crunz</option>
            <option value="Santa Fe">Santa Fe</option>
            <option value="Santiago del Estero">Santiago del Estero</option>
            <option value="Tierra del Fuego">Tierra del Fuego</option>
            <option value="Tucuman">Tucuman</option>
          </select>
          {errors.province && (
            <span className="form-error">{errors.province}</span>
          )}
        </div>
        <div className="d-flex justify-content-between gap-3 mb-2">
          <div>
            <label htmlFor="direction" className="d-block">
              Dirección
            </label>
            <input
              type="text"
              name="direction"
              id="direction"
              placeholder="Av. siempre viva"
              required
              value={order.direction}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="number" className="d-block">
              N°
            </label>
            <input
              type="number"
              name="number"
              placeholder="346"
              className="w-100"
              min={0}
              required
              value={order.number}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
        </div>
        {errors.direction && (
          <span className="form-error">{errors.direction}</span>
        )}
        {errors.number && <span className="form-error">{errors.number}</span>}
        <input type="submit" value="Finalizar Compra" />
      </form>
      <button onClick={handleCancel}>Cancelar</button>
    </>
  );
};

export default CheckoutForm;
