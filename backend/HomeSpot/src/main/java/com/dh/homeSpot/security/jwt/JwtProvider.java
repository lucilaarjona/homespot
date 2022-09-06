package com.dh.homeSpot.security.jwt;
import com.dh.homeSpot.model.entities.security.MainUser;
import io.jsonwebtoken.*;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;

// aca se genera el token y valida que este bien formado y no este expirado

@Component
public class JwtProvider {

    private final static Logger logger = Logger.getLogger(JwtProvider.class);

    //Valores que tenemos en el aplication.properties
    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private int expiration;

      public String generateToken(Authentication authentication){
        MainUser mainUser = (MainUser) authentication.getPrincipal();
        return Jwts.builder().setSubject(mainUser.getUsername())
                // Asigna fecha de creación del token
                .setIssuedAt(new Date())
                //Asigna fecha de expiración
                .setExpiration(new Date(new Date().getTime() + expiration * 1000L))
                //Firma
                .signWith(SignatureAlgorithm.HS512, secret)
                .compact();
    }

    //subject --> Nombre del usuario
    public String getUserNameFromToken (String token){
        return Jwts.parser().setSigningKey(secret).parseClaimsJws(token).getBody().getSubject();
    }

    public Boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(secret).parseClaimsJws(token);
            return true;
        } catch (MalformedJwtException e) {
            logger.error("Malformed Token");
        } catch (UnsupportedJwtException e) {
            logger.error("Unsupported Token");
        } catch (ExpiredJwtException e) {
            logger.error("Expired Token or unverified account");
        } catch (IllegalArgumentException e) {
            logger.error("Illegal Token");
        } catch (SignatureException e) {
            logger.error("signature fail");
        }
        return false;
    }
}
