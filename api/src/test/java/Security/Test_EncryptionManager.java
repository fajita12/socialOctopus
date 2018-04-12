package Security;

import Connection.DatabaseConnection;
import Connection.RDSConnection;
import com.amazonaws.services.lambda.runtime.ClientContext;
import com.amazonaws.services.lambda.runtime.CognitoIdentity;
import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.LambdaLogger;
import org.junit.Before;
import org.junit.Test;

import java.util.LinkedHashMap;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotSame;

public class Test_EncryptionManager {



    @Test
    public void test_verify_valid() throws Exception {
        DatabaseConnection dbc = new RDSConnection();
        dbc.connect();

        String token = "TEST";
        String user = "TEST";

        Object body = setUpBody(token);

        assertEquals("UserId", user, EncryptionManager.verify(dbc, body));
    }

    @Test
    public void test_verify_invalid() throws Exception {
        DatabaseConnection dbc = new RDSConnection();
        dbc.connect();

        String token = "TEST_INVALID";
        //given invalid token, should return empty string
        String user = "";

        Object body = setUpBody(token);

        assertEquals("Empty UserId", user, EncryptionManager.verify(dbc, body));
    }

    private Object setUpBody(String token){
        LinkedHashMap<String, String> header = new LinkedHashMap<>();
        LinkedHashMap<String, Object> body = new LinkedHashMap<>();

        header.put("SOToken", token);
        body.put("headers", header);

        return (body);
    }

    private Object setUpContext(){
        return (new Context() {
            @Override
            public String getAwsRequestId() {
                return null;
            }

            @Override
            public String getLogGroupName() {
                return null;
            }

            @Override
            public String getLogStreamName() {
                return null;
            }

            @Override
            public String getFunctionName() {
                return null;
            }

            @Override
            public String getFunctionVersion() {
                return null;
            }

            @Override
            public String getInvokedFunctionArn() {
                return null;
            }

            @Override
            public CognitoIdentity getIdentity() {
                return null;
            }

            @Override
            public ClientContext getClientContext() {
                return null;
            }

            @Override
            public int getRemainingTimeInMillis() {
                return 0;
            }

            @Override
            public int getMemoryLimitInMB() {
                return 0;
            }

            @Override
            public LambdaLogger getLogger() {
                return new LambdaLogger() {
                    @Override
                    public void log(String s) {
                        System.out.println(s);
                    }
                };
            }
        });
    }
}
