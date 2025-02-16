import { PlaneBlue, OmniAi, TinyInstagram } from '@/icons'
import { v4 } from 'uuid'

export type AutomationListenerProps = {
    id: string
    label: string
    icon: JSX.Element
    description: string
    type: 'OMNIAI' | 'MESSAGE'
}
export type AutomationsTriggerProps = {
    id: string
    label: string
    icon: JSX.Element
    description: string
    type: 'COMMENT' | 'DM'
}

export const AUTOMATION_TRIGGERS: AutomationsTriggerProps[] = [
    {
        id: v4(),
        label: 'User comments on my post',
        icon: <TinyInstagram />,
        description: 'Select if you want to automate comments on your post',
        type: 'COMMENT',
    },
    {
        id: v4(),
        label: 'User sends me a dm with a keyword',
        icon: <TinyInstagram />,
        description: 'Select if you want to automate DMs on your profile',
        type: 'DM',
    },
]

export const AUTOMATION_LISTENERS: AutomationListenerProps[] = [
    {
        id: v4(),
        label: 'Send the user a message',
        icon: <PlaneBlue />,
        description: 'Enter the message that you want to send the user.',
        type: 'MESSAGE',
    },
    {
        id: v4(),
        label: 'Let Smart AI take over',
        icon: <OmniAi />,
        description: 'Tell AI about your project. (Upgrade to use this feature)',
        type: 'OMNIAI',
    },
]