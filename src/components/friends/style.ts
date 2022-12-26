import styled, {css} from "styled-components";

interface FriendInviteStyleProps {
    isFriend: boolean
}

export const FriendInviteStyle = styled.div<FriendInviteStyleProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .content{
        display: flex;
        white-space: nowrap;
        align-items: center;
        gap: .5rem;
        .container{
            display: flex;
            flex-direction: column;
            justify-content: center;
            h3{
                margin: 0;
                padding: 0;
                font-size: 15px;
                font-weight: 500;
            }  
            .subtitle{
                display: flex;
                align-items: center;
                span{
                    font-weight: 400;
                    color: rgba(0,0,0,.4);
                    font-size: 13px;
                    margin-right: .2rem;
                }     
            }
        }
    }
    .buttonInvite{
        button{
            padding:.5rem 2rem;
            height: 100%;

            border: none;
            border-radius: 10px;

            ${({isFriend}) => 
                isFriend ?
                    css`
                        background-color: #0002;
                        color: #0004;
                    `
                 :
                    css`
                        background-color: #FECA05;
                        cursor: pointer;
                   `
            }
            h3{
                font-size: 13px;
            }
        }
    }
`;