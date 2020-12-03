import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/authContext'

import { Container, DropDown } from './styles'

import trampaeIcon from '../../assets/icon.png'
import ProfileImg from '../../assets/profile.png'
import profilePic from '../../assets/ZecaUrubu.png'

import { FiUsers, FiSettings, FiPhoneCall, FiLogOut } from 'react-icons/fi'
import { FiMenu } from 'react-icons/fi'

export default function Navbar({ children }) {
	const [active, setActive] = useState(false)
	const { user } = useAuth();

	return (
		<>
			<Container>
				<a href="/home">
					<img src={trampaeIcon} alt="Logo" />
				</a>

				<div>
					{children}
					<button onClick={() => setActive(!active)} className="hamburguer-buttom">
						<FiMenu />
					</button>
				</div>

				
				<a href="/new-service" className="button secondary">Novo Serviço</a>
			</Container>
			<DropDown active={active}>
				<a href={`profile/${user.id}`} className="navItem">
					{user.name}
					<img src={user.image_url ? user.image_url : profilePic} alt="user" className="profilePic" />
				</a>
				<a href="/talkwithus" className="navItem">
					Fale conosco
					<FiPhoneCall size={'1.8rem'} />
				</a>
				<a href="/aboutus" className="navItem">
					Sobre nós
					<FiUsers size={'1.8rem'} />
				</a>

				<Link className="navItem" to="/logout">
					Sair
					<FiLogOut size={'1.8rem'} />
				</Link>
			</DropDown>
		</>
	)
}
