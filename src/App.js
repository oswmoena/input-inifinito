import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { Grid, TextField } from "@material-ui/core";
import Random from "meteor-random";

const App = () => {
  const [inputArray, setInput] = useState([]);
  const agregarInput = () => {
    const newInputArray = [...inputArray];
    newInputArray.push({
      _id: Random.id(),
      key: "",
      value: "",
    });
    setInput(newInputArray);
  };

  const quitarInput = (id) => {
    setInput(inputArray.filter((item) => item._id !== id));
  };

  const actualizarData = (id, text) => {
    const newparadeArray = inputArray.map((i) => {
      if (id === i._id) {
        i.value = text;
      }
      return i;
    });

    setInput(newparadeArray);
  };

  const submitForm = () => {
    alert(JSON.stringify(inputArray, null, 2));
  };

  return (
    <Grid
      container
      justify="center"
      style={{ padding: "20px", textAlign: "center", alignItems: "center" }}
      item={true}
    >
      {inputArray.length <= 0
        ? agregarInput()
        : inputArray.map(({ _id, key, value }) => (
            <Grid
              container
              md={12}
              key={_id}
              style={{ alignItems: "center", padding: "10px" }}
              item={true}
            >
              <Grid md={2} item={true}>Titulo</Grid>
              <Grid md={8} item={true}>
                <TextField
                  type="text"
                  placeholder={_id}
                  key={key}
                  value={value}
                  onChange={(event) => actualizarData(_id, event.target.value)}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid md={2} item={true}>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() => quitarInput(_id)}
                >
                  -
                </Button>
              </Grid>
            </Grid>
          ))}
      <Grid container>
        <Grid md={6} item={true}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => agregarInput()}
          >
            Agregar Input
          </Button>
        </Grid>
        <Grid md={6} item={true}>
          <Button
            variant="contained"
            color="default"
            onClick={() => submitForm()}
          >
            Enviar Form
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
