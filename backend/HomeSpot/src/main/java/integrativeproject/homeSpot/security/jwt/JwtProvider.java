package integrativeproject.homeSpot.security.jwt;

import integrativeproject.homeSpot.model.entity.security.MainUser;
import io.jsonwebtoken.*;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;

// Clase que genera el token y valida que este bien formado y no este expirado

@Component
public class JwtProvider {

    // Log4j por si hay errores
    private final static Logger logger = Logger.getLogger(JwtProvider.class);

    //Valores que tenemos en el aplicattion.properties
    @Value("${jwt.secret}")
    private String secret;

    @Value("${jwt.expiration}")
    private int expiration;

    /**
     *setIssuedAt --> Asigna fecha de creción del token
     *setExpiration --> Asigna fehca de expiración
     * signWith --> Firma
     */
    public String generateToken(Authentication authentication){
      MainUser mainUser = (MainUser) authentication.getPrincipal();
      Map<String, Object> claims = new HashMap<>();
        claims.put("user_info",mainUser);

          return Jwts.builder()
                .setSubject(mainUser.getUsername())
                .addClaims(claims)
                .setIssuedAt(new Date())
                .setExpiration(new Date(new Date().getTime() + expiration * 1000L))
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
