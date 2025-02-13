import Link, { LinkProps } from "next/link";
import { Link as MuiLink } from "@mui/material";

interface Props extends LinkProps {
    children: React.ReactNode
}

const NavLink = (props: Props) => {
    const { children, ...nextLinkProps } = props;
    return <Link passHref legacyBehavior {...nextLinkProps}>
        <MuiLink underline="hover" variant="body1" color="primary.contrastText" sx={{ textTransform: 'uppercase' }}>{children}</MuiLink>
    </Link>
}
export default NavLink;