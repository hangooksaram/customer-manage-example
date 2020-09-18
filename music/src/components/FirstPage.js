import React from 'react'

const FirstPage = () => {
    return (
        <div>        
            <div style={styles.first}>새로운 음악을 추가해 보세요</div>
        </div>

    )
}

const styles = {
    first : {
      textAlign: 'center', 
      marginTop : '10%',
      fontSize : 45,
      fontWeight : 'bold'
    },
}

export default FirstPage
