// Project: Mubarak Hussaini Barade Data // Framework: React (Vite) + TailwindCSS // Purpose: Professional corporate website to sell Data & Airtime, manual payments, user wallet, admin dashboard

/* README

Quick start (frontend only):

1. Ensure Node 18+ installed.


2. Create project directory and paste the files below into the structure.


3. Install dependencies (from project root): npm install


4. Run dev server: npm run dev



This repo includes a lightweight backend example (Express) in /server for handling user registration, orders, and manual payment confirmations. It uses an in-memory store for demo — replace with a real DB (Postgres, MySQL, MongoDB) for production.

Security & Production notes

Add HTTPS and set secure cookies.

Use a real database and implement proper password hashing (bcrypt) and JWT secret management.

For manual payment, include clear instructions and upload receipts; admins verify and mark wallets as funded.

Add rate limiting and input validation.


File structure (this single file lists the main source files to copy):

package.json vite.config.js tailwind.config.cjs postcss.config.cjs src/main.jsx src/index.css src/App.jsx src/pages/Home.jsx src/pages/BuyData.jsx src/pages/Airtime.jsx src/pages/TopupManual.jsx src/pages/Wallet.jsx src/pages/Auth.jsx src/pages/AdminDashboard.jsx src/components/Header.jsx src/components/Footer.jsx src/components/ProtectedRoute.jsx src/components/DataPlanCard.jsx src/services/api.js server/index.js server/data-store.js


---

// package.json { "name": "mubarak-data-site", "version": "1.0.0", "private": true, "scripts": { "dev": "vite", "build": "vite build", "preview": "vite preview", "start-server": "node server/index.js" }, "dependencies": { "axios": "^1.4.0", "react": "^18.2.0", "react-dom": "^18.2.0", "react-router-dom": "^6.14.1", "jwt-decode": "^3.1.2" }, "devDependencies": { "@vitejs/plugin-react": "^4.0.0", "autoprefixer": "^10.4.0", "postcss": "^8.4.0", "tailwindcss": "^3.4.7", "vite": "^5.0.0" } }

// tailwind.config.cjs module.exports = { content: ['./index.html', './src/**/*.{js,jsx}'], theme: { extend: {}, }, plugins: [], }

// postcss.config.cjs module.exports = { plugins: { tailwindcss: {}, autoprefixer: {}, }, }

// src/index.css @tailwind base; @tailwind components; @tailwind utilities;

:root{ --primary: #0b5cff; /* corporate blue */ --muted: #6b7280; }

body{@apply bg-white text-gray-800;}

/* src/main.jsx */ import React from 'react' import { createRoot } from 'react-dom/client' import { BrowserRouter } from 'react-router-dom' import App from './App' import './index.css'

createRoot(document.getElementById('root')).render( <React.StrictMode> <BrowserRouter> <App /> </BrowserRouter> </React.StrictMode> )

/* src/App.jsx */ import React from 'react' import { Routes, Route } from 'react-router-dom' import Header from './components/Header' import Footer from './components/Footer' import Home from './pages/Home' import BuyData from './pages/BuyData' import Airtime from './pages/Airtime' import TopupManual from './pages/TopupManual' import Wallet from './pages/Wallet' import Auth from './pages/Auth' import AdminDashboard from './pages/AdminDashboard' import ProtectedRoute from './components/ProtectedRoute'

export default function App(){ return ( <div className="min-h-screen flex flex-col"> <Header /> <main className="flex-1 container mx-auto px-4 py-10"> <Routes> <Route path="/" element={<Home />} /> <Route path="/buy" element={<BuyData />} /> <Route path="/airtime" element={<Airtime />} /> <Route path="/topup-manual" element={<TopupManual />} /> <Route path="/wallet" element={<ProtectedRoute><Wallet/></ProtectedRoute>} /> <Route path="/auth" element={<Auth />} /> <Route path="/admin" element={<ProtectedRoute adminOnly><AdminDashboard/></ProtectedRoute>} /> </Routes> </main> <Footer /> </div> ) }

/* src/components/Header.jsx */ import React from 'react' import { Link, useNavigate } from 'react-router-dom'

export default function Header(){ const navigate = useNavigate() const isLogged = !!localStorage.getItem('token') const handleLogout = ()=>{ localStorage.removeItem('token'); navigate('/') } return ( <header className="bg-white shadow"> <div className="container mx-auto px-4 py-4 flex items-center justify-between"> <div className="flex items-center gap-3"> <div className="text-2xl font-bold text-[var(--primary)]">Mubarak Hussaini Barade Data</div> <div className="text-sm text-gray-500">Reliable data & airtime — corporate</div> </div> <nav className="flex items-center gap-4"> <Link to="/" className="hover:text-[var(--primary)]">Home</Link> <Link to="/buy" className="hover:text-[var(--primary)]">Buy Data</Link> <Link to="/airtime" className="hover:text-[var(--primary)]">Airtime</Link> <Link to="/wallet" className="hover:text-[var(--primary)]">Wallet</Link> <Link to="/topup-manual" className="hover:text-[var(--primary)]">Manual Payment</Link> {isLogged ? ( <button onClick={handleLogout} className="ml-2 px-3 py-1 border rounded">Logout</button> ) : ( <Link to="/auth" className="ml-2 px-3 py-1 bg-[var(--primary)] text-white rounded">Sign in</Link> )} </nav> </div> </header> ) }

/* src/components/Footer.jsx */ import React from 'react' export default function Footer(){ return ( <footer className="bg-gray-50 border-t mt-10"> <div className="container mx-auto px-4 py-6 flex justify-between items-center"> <div> © {new Date().getFullYear()} Mubarak Hussaini Barade Data </div> <div className="text-sm text-gray-500">Contact: admin@yourdomain.com | Terms | Privacy</div> </div> </footer> ) }

/* src/components/ProtectedRoute.jsx */ import React from 'react' import { Navigate } from 'react-router-dom'

export default function ProtectedRoute({children, adminOnly=false}){ const token = localStorage.getItem('token') if(!token) return <Navigate to="/auth" replace /> if(adminOnly){ try{ const user = JSON.parse(atob(token.split('.')[1]||"{}")) if(!user?.isAdmin) return <Navigate to="/" replace /> }catch(e){ return <Navigate to="/" replace /> } } return children }

/* src/components/DataPlanCard.jsx */ import React from 'react' export default function DataPlanCard({plan, onBuy}){ return ( <div className="border rounded p-4 shadow-sm"> <div className="font-semibold">{plan.name}</div> <div className="text-sm text-gray-500">{plan.network} • {plan.validity}</div> <div className="mt-3 text-lg font-bold">₦{plan.price}</div> <button onClick={()=>onBuy(plan)} className="mt-4 w-full py-2 bg-[var(--primary)] text-white rounded">Buy</button> </div> ) }

/* src/pages/Home.jsx */ import React from 'react' import { Link } from 'react-router-dom' export default function Home(){ return ( <div className="grid md:grid-cols-2 gap-8 items-center"> <div> <h1 className="text-4xl font-bold">Mubarak Hussaini Barade Data</h1> <p className="mt-4 text-gray-600">Buy data and airtime instantly. Manual payment accepted — upload receipt and our team will confirm within business hours.</p> <div className="mt-6 flex gap-3"> <Link to="/buy" className="px-4 py-2 bg-[var(--primary)] text-white rounded">Buy Data</Link> <Link to="/airtime" className="px-4 py-2 border rounded">Buy Airtime</Link> </div> </div> <div className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border"> <h3 className="font-semibold">Why choose us</h3> <ul className="mt-3 space-y-2 text-gray-600"> <li>✓ All major networks (MTN, GLO, Airtel, 9mobile)</li> <li>✓ Airtime VTU & Cable TV subscriptions</li> <li>✓ Corporate, reliable delivery</li> </ul> </div> </div> ) }

/* src/pages/BuyData.jsx */ import React, {useState, useEffect} from 'react' import DataPlanCard from '../components/DataPlanCard' import axios from 'axios'

const SAMPLE_PLANS = [ {id:1, name:'MTN 1.5GB', network:'MTN', price:800, validity:'30 days'}, {id:2, name:'Airtel 1GB', network:'Airtel', price:700, validity:'30 days'}, {id:3, name:'Glo 2GB', network:'GLO', price:900, validity:'30 days'}, ]

export default function BuyData(){ const [plans, setPlans] = useState(SAMPLE_PLANS) const [phone, setPhone] = useState('') const [selected, setSelected] = useState(null) const [message, setMessage] = useState('')

useEffect(()=>{ // In production fetch plans from server // axios.get('/api/plans').then(r=>setPlans(r.data)) },[])

const handleBuy = (plan)=>{ setSelected(plan) }

const submitOrder = async ()=>{ if(!phone || !selected) return setMessage('Enter phone and choose a plan') try{ const token = localStorage.getItem('token') const res = await axios.post('/api/orders', {phone, planId:selected.id}, {headers: {Authorization: token||''}}) setMessage('Order created. Please go to Manual Payment page to upload proof.') setSelected(null) }catch(e){ setMessage('Failed to create order (demo).') } }

return ( <div> <h2 className="text-2xl font-semibold">Buy Data</h2> <p className="text-gray-600 mt-2">Choose a plan and proceed to manual payment.</p> <div className="grid md:grid-cols-3 gap-4 mt-6"> {plans.map(p=> <DataPlanCard key={p.id} plan={p} onBuy={handleBuy} />)} </div>

{selected && (
    <div className="mt-6 border p-4 rounded">
      <h3 className="font-semibold">Checkout: {selected.name}</h3>
      <div className="mt-3 grid md:grid-cols-2 gap-3">
        <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Recipient phone" className="border p-2 rounded" />
        <div className="flex items-center gap-3">
          <button onClick={submitOrder} className="px-4 py-2 bg-[var(--primary)] text-white rounded">Create Order</button>
          <button onClick={()=>setSelected(null)} className="px-4 py-2 border rounded">Cancel</button>
        </div>
      </div>
      {message && <div className="mt-3 text-sm text-green-700">{message}</div>}
    </div>
  )}
</div>

) }

/* src/pages/Airtime.jsx */ import React, {useState} from 'react' import axios from 'axios' export default function Airtime(){ const [phone, setPhone] = useState('') const [amount, setAmount] = useState('') const [message, setMessage] = useState('') const buy = async ()=>{ if(!phone || !amount) return setMessage('Provide phone and amount') try{ await axios.post('/api/airtime', {phone, amount}) setMessage('Airtime order created. Use Manual Payment page to upload proof.') }catch(e){ setMessage('Demo: failed to create order') } } return ( <div> <h2 className="text-2xl font-semibold">Buy Airtime (VTU)</h2> <div className="mt-4 grid md:grid-cols-3 gap-3"> <input value={phone} onChange={e=>setPhone(e.target.value)} placeholder="Phone number" className="border p-2 rounded" /> <input value={amount} onChange={e=>setAmount(e.target.value)} placeholder="Amount (₦)" className="border p-2 rounded" /> <button onClick={buy} className="px-4 py-2 bg-[var(--primary)] text-white rounded">Buy</button> </div> {message && <div className="mt-3 text-green-700">{message}</div>} </div> ) }

/* src/pages/TopupManual.jsx */ import React, {useState, useEffect} from 'react' import axios from 'axios'

export default function TopupManual(){ const [orderId, setOrderId] = useState('') const [receipt, setReceipt] = useState(null) const [message, setMessage] = useState('') const [myOrders, setMyOrders] = useState([])

useEffect(()=>{ // fetch user's pending orders axios.get('/api/my-orders').then(r=>setMyOrders(r.data)).catch(()=>{}) },[])

const upload = async ()=>{ if(!orderId || !receipt) return setMessage('Select order and upload receipt') const form = new FormData() form.append('orderId', orderId) form.append('receipt', receipt) try{ await axios.post('/api/manual-topup', form, {headers: {'Content-Type': 'multipart/form-data'}}) setMessage('Receipt uploaded. Admin will confirm and credit your wallet.') }catch(e){ setMessage('Upload failed (demo).') } }

return ( <div> <h2 className="text-2xl font-semibold">Manual Payment / Top-up</h2> <p className="text-gray-600 mt-2">If you paid via bank transfer or POS, upload your receipt and reference. Our admin will confirm and credit your wallet.</p>

<div className="mt-4 grid md:grid-cols-2 gap-3">
    <select value={orderId} onChange={e=>setOrderId(e.target.value)} className="border p-2 rounded">
      <option value="">Select your pending order</option>
      {myOrders.map(o=> <option key={o.id} value={o.id}>{o.type} #{o.id} • ₦{o.amount}</option>)}
    </select>
    <input type="file" onChange={e=>setReceipt(e.target.files[0])} />
  </div>
  <div className="mt-3">
    <button onClick={upload} className="px-4 py-2 bg-[var(--primary)] text-white rounded">Upload Proof</button>
  </div>
  {message && <div className="mt-3 text-green-700">{message}</div>}
</div>

) }

/* src/pages/Wallet.jsx */ import React, {useState, useEffect} from 'react' import axios from 'axios' export default function Wallet(){ const [wallet, setWallet] = useState({balance:0, transactions:[]}) useEffect(()=>{ axios.get('/api/wallet').then(r=>setWallet(r.data)).catch(()=>{}) },[]) return ( <div> <h2 className="text-2xl font-semibold">Wallet</h2> <div className="mt-4 border p-4 rounded md:w-1/3"> <div className="text-sm text-gray-500">Available balance</div> <div className="text-3xl font-bold">₦{wallet.balance}</div> </div> <h3 className="mt-6 font-semibold">Recent transactions</h3> <div className="mt-3"> {wallet.transactions.map(t=> ( <div key={t.id} className="border p-3 rounded mb-2"> <div className="text-sm">{t.description}</div> <div className="font-bold">₦{t.amount}</div> <div className="text-xs text-gray-500">{new Date(t.date).toLocaleString()}</div> </div> ))} </div> </div> ) }

/* src/pages/Auth.jsx */ import React, {useState} from 'react' import axios from 'axios' import {useNavigate} from 'react-router-dom'

export default function Auth(){ const [isSignUp, setIsSignUp] = useState(false) const [email, setEmail] = useState('') const [password, setPassword] = useState('') const [message, setMessage] = useState('') const navigate = useNavigate()

const submit = async ()=>{ try{ const url = isSignUp? '/api/register' : '/api/login' const res = await axios.post(url, {email, password}) localStorage.setItem('token', res.data.token) navigate('/') }catch(e){ setMessage('Auth failed (demo)') } }

return ( <div className="max-w-md"> <h2 className="text-2xl font-semibold">{isSignUp? 'Create account' : 'Sign in'}</h2> <div className="mt-4 grid gap-3"> <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="border p-2 rounded" /> <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" className="border p-2 rounded" /> <button onClick={submit} className="px-4 py-2 bg-[var(--primary)] text-white rounded">{isSignUp? 'Sign up' : 'Sign in'}</button> <button onClick={()=>setIsSignUp(s=>!s)} className="text-sm text-[var(--primary)]">{isSignUp? 'Already have an account? Sign in' : "Don't have an account? Create one"}</button> {message && <div className="text-sm text-red-600">{message}</div>} </div> </div> ) }

/* src/pages/AdminDashboard.jsx */ import React, {useState, useEffect} from 'react' import axios from 'axios'

export default function AdminDashboard(){ const [pending, setPending] = useState([]) useEffect(()=>{ fetchPending() },[]) const fetchPending = ()=> axios.get('/api/admin/pending').then(r=>setPending(r.data)).catch(()=>{}) const confirm = (id)=> axios.post('/api/admin/confirm',{id}).then(()=>fetchPending()).catch(()=>{})

return ( <div> <h2 className="text-2xl font-semibold">Admin Dashboard</h2> <p className="text-gray-600">Review manual payment proofs and confirm to credit wallets.</p> <div className="mt-6 space-y-4"> {pending.map(p=> ( <div key={p.id} className="border p-4 rounded flex justify-between items-center"> <div> <div className="font-semibold">Order #{p.id} • ₦{p.amount}</div> <div className="text-sm text-gray-500">Type: {p.type} • User: {p.userEmail}</div> <div className="mt-2"><a href={p.receiptUrl} target="_blank" rel="noreferrer" className="text-[var(--primary)]">View receipt</a></div> </div> <div className="flex gap-2"> <button onClick={()=>confirm(p.id)} className="px-3 py-1 bg-green-600 text-white rounded">Confirm</button> </div> </div> ))} </div> </div> ) }

/* src/services/api.js */ import axios from 'axios' const api = axios.create({baseURL: process.env.REACT_APP_API_URL || ''}) api.interceptors.request.use(cfg=>{ const token = localStorage.getItem('token') if(token) cfg.headers.Authorization = token return cfg }) export default api

/* server/data-store.js */ // Simple in-memory store for demo. Replace with real DB in production. const { v4: uuidv4 } = require('uuid') const users = [ // initial admin {id: 'u1', email:'admin@demo.com', password: 'admin123', isAdmin:true, wallet:0} ] const orders = [] const uploads = [] module.exports = { users, orders, uploads }

/* server/index.js */ // Minimal Express backend for demo (manual payments & auth). NOT production-ready. const express = require('express') const cors = require('cors') const multer = require('multer') const jwt = require('jsonwebtoken') const bodyParser = require('body-parser') const { users, orders, uploads } = require('./data-store') const upload = multer({ dest: 'uploads/' }) const app = express() app.use(cors()) app.use(bodyParser.json()) const JWT_SECRET = 'replace-this-with-secure-secret'

function genToken(user){ return jwt.sign({id:user.id, email:user.email, isAdmin:user.isAdmin}, JWT_SECRET, {expiresIn:'7d'}) }

app.post('/api/register', (req,res)=>{ const {email,password} = req.body if(users.find(u=>u.email===email)) return res.status(400).json({message:'exists'}) const u = {id: 'u'+(users.length+1), email, password, isAdmin:false, wallet:0} users.push(u) res.json({token: genToken(u)}) })

app.post('/api/login',(req,res)=>{ const {email,password} = req.body const u = users.find(x=>x.email===email && x.password===password) if(!u) return res.status(401).json({message:'invalid'}) res.json({token: genToken(u)}) })

function authMiddleware(req,res,next){ const auth = req.headers.authorization if(!auth) return res.status(401).end() try{ const payload = jwt.verify(auth, JWT_SECRET) req.user = payload next() }catch(e){ res.status(401).end() } }

app.post('/api/orders', authMiddleware, (req,res)=>{ const {planId, phone} = req.body const order = { id: 'o'+(orders.length+1), userId: req.user.id, userEmail: req.user.email, planId, phone, amount: 1000, status:'pending', type:'data' } orders.push(order) res.json(order) })

app.post('/api/airtime', authMiddleware, (req,res)=>{ const {phone, amount} = req.body const order = { id: 'o'+(orders.length+1), userId: req.user.id, userEmail: req.user.email, phone, amount, status:'pending', type:'airtime' } orders.push(order) res.json(order) })

app.get('/api/my-orders', authMiddleware, (req,res)=>{ res.json(orders.filter(o=>o.userId===req.user.id && o.status==='pending')) })

app.post('/api/manual-topup', authMiddleware, upload.single('receipt'), (req,res)=>{ const {orderId} = req.body const file = req.file const u = { id: 'up'+(uploads.length+1), orderId, userId: req.user.id, userEmail: req.user.email, receiptPath: file.path, amount: 0, status:'uploaded' } uploads.push(u) res.json({ok:true}) })

app.get('/api/wallet', authMiddleware, (req,res)=>{ const u = users.find(x=>x.id===req.user.id) res.json({balance: u.wallet||0, transactions: []}) })

app.get('/api/admin/pending', authMiddleware, (req,res)=>{ if(!req.user.isAdmin) return res.status(403).end() const list = uploads.map(u=>({id:u.id, orderId:u.orderId, amount:0, userEmail:u.userEmail, receiptUrl: '/'+u.receiptPath, type:'manual'})) res.json(list) })

app.post('/api/admin/confirm', authMiddleware, (req,res)=>{ if(!req.user.isAdmin) return res.status(403).end() const {id} = req.body const up = uploads.find(x=>x.id===id) if(!up) return res.status(404).end() // credit user's wallet for demo const user = users.find(u=>u.email===up.userEmail) if(user) user.wallet = (user.wallet||0) + 1000 up.status = 'confirmed' res.json({ok:true}) })

app.listen(4000, ()=> console.log('Server running on http://localhost:4000'))

*/
