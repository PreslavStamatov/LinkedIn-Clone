import './styles/RightContainer.css'
import InfoIcon from '@mui/icons-material/Info';
import SuggestedAccount from './SuggestedAccount';
import Avatar from '@mui/material/Avatar';

function RightContainer() {

  return (
    <div id="right-container">
      <div id='right-container-header'>
        <p>Add to your feed</p>
        <InfoIcon className='info-icon'></InfoIcon>
      </div>

      <SuggestedAccount Avatar={Avatar} src='https://scontent.cdninstagram.com/v/t51.2885-19/437083447_1089028229058640_7379901715254513912_n.jpg?stp=dst-jpg_s80x80&_nc_cat=100&ccb=1-7&_nc_sid=3fd06f&_nc_ohc=NfZDanOE8nkQ7kNvgHNjfNS&_nc_ht=scontent.cdninstagram.com&oh=00_AYC0rp0JBZrNZM_Cvcllti-o-HG4ELP7-LKId91CiJ1sbQ&oe=6647A82C' name='Nikol Ivanova' description='Obicha gim, Pesi i shunki'></SuggestedAccount>
      <SuggestedAccount Avatar={Avatar} src='https://shorturl.at/nvBD8' name='Vladi Topalov 🔖' description='The Linked Practitioner | Trainer for LinkedIn at The LinkedBlog | Founder+Marketing Consultant for LinkedIn at BookMark | Forbes Bulgaria Men On Top 2021 | Founder at Azcheta.com | Dreamreader'></SuggestedAccount>
      <SuggestedAccount Avatar={Avatar} src='' name='Nikola Yanev' description='I simplify fundraising for founders | 7 years in VC | Forbes 30u30'></SuggestedAccount>
      <SuggestedAccount Avatar={Avatar} src='' name='Emanuel (Еmo) Tonev 🦦 ' description='LinkedIn Brand Architect & Storyteller for Professionals & Businesses 🗣️ | Helping you shine on LinkedIn by Optimising your Profile, writing your LinkedIn Posts + Comments 🚀 | LinkedIn Business Development 🧑‍💻'></SuggestedAccount>
    </div>
  )
}

export default RightContainer