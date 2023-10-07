# Walkthgouth
  - Iniciate the preject running the following command:

    ```npm init```
  
  - At the prompted messages, fill the information as it betters suits yout project

  - Execute the command to install all dependecies:
    
    ```npm install --save-dev css-loader html-loader html-webpack-plugin http-server style-loader webpack webpack-cli```
  
  - Change the specifics on your `packege.json` file

    - `main` should receive the value `webpack.config.cjs`
    - `type` should receive the valie `module`
    - into the `scripts` json, add the folowing scripts
      - `"build": "npx webpack --watch"`
      - `"provide": "npx http-server ./dist --port=8080"`