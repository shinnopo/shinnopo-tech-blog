import React from 'react'

import Container from './container'
import * as styles from './footer.module.css'

const Footer = () => {
  let d = new Date()
  return (
    <Container as="footer">
      <div className={styles.container}>
        &copy; Shinnosuke Mogi {d.getFullYear()}
      </div>
    </Container>
  )
}

export default Footer
