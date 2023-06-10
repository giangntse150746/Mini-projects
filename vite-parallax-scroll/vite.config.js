import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // resolve: { // find folder and made it global
  //   alias: [
  //     {
  //       find: "common",
  //       replacement: resolve(__dirname, "src/common"),
  //     },
  //   ],
  // },
  plugins: [react()],
})
