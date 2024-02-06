

export interface ButtonProps {
    btnClass?: string;
    title: string;
    onClick?: ()=>void;
}

export interface GithubAuthProps {
    clientId: string;
    clientSecret: string;
}

export interface ProgressProps {
    progress: number;
}