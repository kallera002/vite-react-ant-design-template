import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  return defineConfig({
    build: {
      sourcemap: false
    },
    resolve: {
      alias: [
        { find: '#', replacement: path.resolve(__dirname, './src') },
        { find: '~', replacement: path.resolve(__dirname, '/node_modules') },
        { find: /^~(.*)$/, replacement: '$1' }
      ]
    },
    plugins: [react()],
    server: {
      port: parseInt(process.env.VITE_PORT),
      watch: {
        usePolling: true
      }
    }
  })
}
