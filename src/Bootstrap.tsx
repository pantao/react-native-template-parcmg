import React from 'react'

import { connect } from 'react-redux'

import { AuthedContainer } from './AppContainers'

const Bootstrap = ({ version }: { [key: string]: any }) => <AuthedContainer />

const ConnectedBootstrap = connect(({ app }: { [option: string]: any }) => ({ ...app }))(Bootstrap)

export default ConnectedBootstrap
