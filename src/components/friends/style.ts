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
        max-width: 60%;
        overflow: hidden;
        white-space: nowrap;
        align-items: center;
        gap: .5rem;
        .container{
            width: fit-content;
            display: flex;
            flex-direction: column;
            justify-content: center;
            overflow: hidden;
            h3{
                margin: 0;
                padding: 0;
                font-size: 15px;
                font-weight: 500;
                white-space: nowrap;
                -webkit-line-clamp: 3;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                @media (max-width:600px){
                    font-size: 13px;
                }
            }  
            .subtitle{
                width: fit-content;
                display: flex;
                justify-content: start;
                align-items: center;
                span{
                    font-weight: 400;
                    color: rgba(0,0,0,.4);
                    font-size: 13px;
                    /* margin-right: .2rem; */
                    white-space: nowrap;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    @media (max-width:600px){
                        font-size: 11px;
                    }
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
            transition: all .5s;
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
                        color: black;
                        transition: all .5s;
                        :hover{
                            background-color: #FECA0585;
                            color: rgba(0,0,0,.85);
                        }
                   `
            }
            h3{
                font-size: 13px;
            }
          
            @media (max-width: 600px){
                padding:.5rem 1.5rem;
            }
        }
    }  
`;