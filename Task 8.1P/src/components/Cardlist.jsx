import React from 'react'
import Card from './Card'
import faker from 'faker'
import './Card.css'

const Cardlist = () =>
{
    return <div className="row">
    <Card 
        avatar = {faker.image.avatar()}
        name = {faker.name.findName()}
        description = {faker.name.jobTitle()}
    />
    <Card 
        avatar = {faker.image.avatar()}
        name = {faker.name.findName()}
        description = {faker.name.jobTitle()}
    />
    <Card 
        avatar = {faker.image.avatar()}
        name = {faker.name.findName()}
        description = {faker.name.jobTitle()}
    />
    <Card 
        avatar = {faker.image.avatar()}
        name = {faker.name.findName()}
        description = {faker.name.jobTitle()}
    />
    <Card 
        avatar = {faker.image.avatar()}
        name = {faker.name.findName()}
        description = {faker.name.jobTitle()}
    />
    <Card 
        avatar = {faker.image.avatar()}
        name = {faker.name.findName()}
        description = {faker.name.jobTitle()}
    />
    </div>
}

export default Cardlist